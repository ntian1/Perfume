// give basic info for testing

const dbConnection = require("../config/mongoCollections");
const data = require('../data');
const users = data.users;
const perfume = data.perfume;

const main = async () => {
    const db = await dbConnection();

    //await perfumes.create("Light Blue Perfume","DOLCE & GABBANA","Light Blue by Dolce & Gabbana Perfume. Apply Dolce & Gabbana Light Blue every time you want to feel like you've stepped onto a sizzling beach. Plunge into this summer scent on a beautiful day to capture the romance, allure, and beauty of Light Blue perfume. This 2001 women's fragrance creation is celebrated for its whimsical and outdoorsy notes of white rose, Sicilian lemon, cedar, and Granny Smith apple. Jasmine, rose, bluebells, bamboo, and amber notes permeate underneath. ")
    //await perfumes.create("White Diamonds Perfume"," ELIZABETH TAYLOR ","White Diamonds by Elizabeth Taylor Perfume. White Diamonds for women is the perfect scent to wear whenever you want to immerse yourself in luxury. Created by the design house of Elizabeth Taylor in 1991, this liquid gem partners generous notes of bergamot, neroli and orange with gracious lily for a sublime fragrance that turns heads. Splash this delightful aroma on to grab attention wherever you go; it is the perfect accessory for your finest ensembles as well as your best-loved jeans.")
    //pw:elementarymydearwatson
    //await users.create("ntian1","ntian1@stevens.edu","male","22","$2a$16$7JKSiEmoP3GNDSalogqgPu0sUbwder7CAN/5wnvCWe6xCKAKwlTD.","false")
    //await perfumes.insertLink("5df592c1017e63a8f61f3bd0","https://www.perfume.com/dolce-gabbana/light-blue/women-perfume")
    //await perfumes.insertImage("5df592c1017e63a8f61f3bd0","https://img.perfume.com/images/products/parent/medium/884w.jpg")
    //用的时候改参数
    //await comments.create("5df5935ffd1794a90e5d9542","5df592c1017e63a8f61f3bd0","1","good"）
    console.log('Done seeding database');

    await db.serverConfig.close();
  };

main().catch(console.log);
