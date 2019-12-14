
const mongoCollections = require("../config/mongoCollections");
const comments = mongoCollections.comments;
const users = mongoCollections.users;
const perfume = mongoCollections.perfume;

async function create(userId,perfumeId,rate,text) {
    // all the parameter should be check in routing
    
    const commentsCollection = await comments();
    let newComment = {
        rate: rate,
        text:text,
        userId:userId,
        perfumeId:perfumeId,
        reported:0,
        dislike:0,
        like:0
    };
    const insertInfo = await commentsCollection.insertOne(newComment);
    if (insertInfo.insertedCount === 0) {
        throw "Could not add comments";
    }
    const newId = String(insertInfo.insertedId);
    const newCommentData = await this.get(newId);

    const usersCollection = await users();
    const { ObjectId } = require('mongodb');
    var objId = ObjectId.createFromHexString(String(userId));
    let addComment = {
        $addToSet: {
            comments: {_id:insertInfo.insertedId
            }
        }
    };

    await usersCollection.updateOne({ _id: objId}, addComment);

    const perfumeCollection = await perfume();

    objId = ObjectId.createFromHexString(String(perfumeId));
    let addRating = {
        $addToSet: {
            rating: {_id:insertInfo.insertedId
            }
        }
    };

    await perfumeCollection.updateOne({ _id: objId}, addRating);

    return newCommentData;
}


async function remove(id) {
    // all the parameter should be check in routing
    
    const { ObjectId } = require('mongodb');
    var objId = ObjectId.createFromHexString(String(id));
    const commentsCollection = await comments();
    const comment = await commentsCollection.findOne({ _id: objId });
    
    const usersCollection = await users();
    let deleteComment = {
        $pull: {
            comments: {_id:objId
            }
        }
    };
    
    objId = ObjectId.createFromHexString(String(comment.userId));
    await usersCollection.updateOne({ _id: objId}, deleteComment);

    objId = ObjectId.createFromHexString(String(id));
    const perfumeCollection = await perfume();

    let deleteRating = {
        $pull: {
            rating: {_id:objId
            }
        }
    };

    objId = ObjectId.createFromHexString(String(comment.perfumeId));
    await perfumeCollection.updateOne({ _id: objId}, deleteRating);
    
    objId = ObjectId.createFromHexString(String(id));
    await commentsCollection.removeOne({ _id: objId});

    return comment;
}




async function getAll(){
    const commentsCollection = await comments();
    return await commentsCollection.find({}).toArray();
}

async function get(id){
    const commentsCollection = await comments();
    const { ObjectId } = require('mongodb');
    const objId = ObjectId.createFromHexString(String(id))
    const comment = await commentsCollection.findOne({ _id: objId });
   
    if (comment === null) {
      throw "No user with that id"
    }
    return comment;
}



async function likeComments(id){

    const commentsCollection = await comments();
    const { ObjectId } = require('mongodb');
    const objId = ObjectId.createFromHexString(String(id))
    const commentsD = await commentsCollection.findOne({ _id: objId});
   var likes = commentsD.like
    
    likes = likes + 1;
    likes = parseInt(likes);
    const updatedTag = {
        $set: {
            "like":likes
        }
    }
    
    await commentsCollection.updateOne({  _id:objId}, updatedTag);
    const newComment = await commentsCollection.findOne({ _id: objId });
    return newComment;
}
async function dislikeComments(id){

    const commentsCollection = await comments();
    const { ObjectId } = require('mongodb');
    const objId = ObjectId.createFromHexString(String(id))
    const commentsD = await commentsCollection.findOne({ _id: objId});
   var likes = commentsD.dislike
    
    likes = likes + 1;
    likes = parseInt(likes);
    const updatedTag = {
        $set: {
            "dislike":likes
        }
    }
    
    await commentsCollection.updateOne({  _id:objId}, updatedTag);
    const newComment = await commentsCollection.findOne({ _id: objId });
    return newComment;
}
async function reportedComments(id){

    const commentsCollection = await comments();
    const { ObjectId } = require('mongodb');
    const objId = ObjectId.createFromHexString(String(id))
    const commentsD = await commentsCollection.findOne({ _id: objId});
   var likes = commentsD.reported
    
    likes = likes + 1;
    likes = parseInt(likes);
    const updatedTag = {
        $set: {
            "reported":likes
        }
    }
    
    await commentsCollection.updateOne({  _id:objId}, updatedTag);
    const newComment = await commentsCollection.findOne({ _id: objId });
    return newComment;
}

module.exports.create = create
module.exports.getAll = getAll
module.exports.get = get
module.exports.likeComments = likeComments
module.exports.dislikeComments = dislikeComments
module.exports.reportedComments = reportedComments
module.exports.remove = remove