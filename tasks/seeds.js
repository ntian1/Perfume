// give basic info for testing

const dbConnection = require("../config/mongoConnection");
const data = require('../data');
const bcrypt = require("bcryptjs");
const saltRounds = 8;

const users = data.users;
const perfume = data.perfume;
const comments = data.comments;

const main = async () => {
  const db = await dbConnection();
  await db.dropDatabase();
  const password1 = await bcrypt.hash("12345", saltRounds);
  const password2 = await bcrypt.hash("54321", saltRounds);
  const password3 = await bcrypt.hash("asdzxc", saltRounds);
  const password4 = await bcrypt.hash("qweasd", saltRounds);
  const password5 = await bcrypt.hash("123asd", saltRounds);
  let user1 = await users.create("tian", "ntian1@stevens.edu", "male", "22", password1, "T");
  let user2 = await users.create("wang", "wang@stevens.edu", "female", "23", password2, "T");
  let user3 = await users.create("tuo", "tuo@stevens.edu", "female", "24", password3, "T");
  let user4 = await users.create("rui", "rui@stevens.edu", "male", "21", password4, "F");
  let user5 = await users.create("liu", "liu@stevens.edu", "male", "20", password5, "T");

  let perfume1 = await perfume.create("D & G Light Blue", "Dolce & Gabbana", "Fragrances include Dolce & Gabbana cologne for Men, D & G Masculine, Sun, and Dolce & Gabbana Light Blue, Sun, Feminine, Sicily, and Dolce & Gabbana The One perfume for women. Fragrances are a significant category for D&G. The designers added new scents in the late 1990s to appeal to younger consumers, enhancing their already successful fragrance line. D&G Feminine and D&G Masculine were launched in 1999, Light Blue, targeted at 25-to 40-year-olds, debuted in 2001.");
  let perfume2 = await perfume.create("Eternity", "Calvin Klein", "When you think about Calvin Klein, initially you think of his clothing line – specifically his jeans and underwear lines (not to mention the famous ad with a young Brooke Shields). But Calvin Klein’s penchant for perfume was equally as cutting edge as his foray into fashion. Calvin Klein turned the fragrance world on its head in 1989 when he introduced Eternity. The now legendary cologne was a pioneer scent for its time, even down to the streamlined design of its bottle. Eternity remains a timeless, classic scent today. When he was a teenager, the young Klein started sketching fashion designs, specifically of women’s clothing. It turns out his passion for fashion is what got him out of the Bronx neighborhood where he grew up and into Manhattan's elite Fashion Institute of Technology, where he studied apparel design.");
  let perfume3 = await perfume.create("Coach", "Coach", "You often hear of a lone designer having the innovative spirit to start a design house, but Coach is one outlet that required a team effort. It began in 1941 when a group of leather artisans started a business called Gail Manufacturing in Manhattan, N.Y. Miles and Lillian Cahn came aboard in 1946, and since they were already well-established in the leather and handbag industries, the couple steered the company in the direction of becoming a formidable handbag designer in the United States. Miles Cahn took helm of the company in 1961, and he drew from his interests in technology and diverse materials to carve out a niche in women's handbags. The company morphed into Gail Leather Products Inc., and Cahn was able to compromise between high-end bags and low-cost, imitation brands. The company's products soared in demand when designer Bonnie Cashin was brought into the fold. The company branched into other endeavors, including shoes, pens and key chains. The partnership with Cashin ended in 1974, and the company became Coach Products Inc. around mid-decade. The company name changed again to Coach Leatherwear Company in 1980 and was sold to food giant Sarah Lee Corporation. It was Sarah Lee that transformed the chain into its modern incarnation, expanding the brand across the country. The company has since expanded into eyewear, luggage, accessories and fragrances. The company debuted eponymous women's scent Coach in 2007, its first fragrance. Coach has since partnered with Estee Lauder Companies on additional fragrances.");
  let perfume4 = await perfume.create("Pink Sugar", "Aquolina", "An offshoot of the Italian cosmetics company Selectiva, Aquolina was founded in 2002 in Italy by renowned Italian gourmand Antonella Pascale. In 2003 Aquolina introduced their very first perfume, the best-selling Pink Sugar. This scent also comes in a shimmering roll on perfume. In 2005, the aptly named Chocolovers fragrance was released followed in 2006 by the menâ??s scent, Blue Sugar for Men. Blue Sugar is a gourmand scent created to accompany the highly successful Pink Sugar female scent. \"The fragrance has the same concept as Pink Sugar and has been very successful since its launch in September,\" explains Pascale.");
  let perfume5 = await perfume.create("Egoiste Platinum", "Chanel", "The high-end fashion, lifestyle and beauty brand, CHANEL, came to life in 1910 when Gabrielle Chanel opened a hat shop called Chanel Modes which captured the heart of the most famous French actress at the time. A few years later, after dropping ‘Modes’ from the brand name, CHANEL launched into clothing and would go on to create the very first ‘little black dress.’ In 1921 the design house released their iconic Chanel No. 5 perfume which remains their most popular women’s scent over 90 years later. CHANEL now has dozens of luxury fragrances for men and women famously loved and worn by celebrities all over the globe.");
  let perfume6 = await perfume.create("Jadore", "Christian Dior", "Christian Dior developed a love of fashion when he was just 5 years old. He would sell his fashion sketches outside of his home in France for 10 cents each. Dior designed for multiple large fashion houses in his youth before founding his own in 1946. Wasting no time, he launched Christian Dior Parfumes just one year later. Still a cult classic to this day, Miss Dior was the very first perfume created by the house of Dior. This powerhouse brand has released over 50 fragrances for men and women and show no signs of slowing down. With a huge selection and a variety of price points, Dior truly offers something for everyone.");
  
  await perfume.insertSize(perfume1._id, "32oz");
  await perfume.insertLink(perfume1._id, "https://www.amazon.com/Elizabeth-Arden-White-Tea-Edt/dp/B01N0Y7QRF/ref=sr_1_1_sspa?keywords=perfume&qid=1576380827&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyWTU2STJETTJPWFJCJmVuY3J5cHRlZElkPUEwNjkzNDYyOEFaSVZGRjhNNDVVJmVuY3J5cHRlZEFkSWQ9QTAzOTIzNTQyNUJSWjA0TTdPNkhXJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==");
  await perfume.insertImage(perfume1._id, "https://cdn1.imggmi.com/uploads/2019/12/12/01959bc45035cee5b6b91f6c398fd9ee-full.jpg");
  await perfume.addTags(perfume1._id, "men");
  await perfume.addTags(perfume1._id, "bussiness");

  await perfume.insertSize(perfume2._id, "33oz");
  await perfume.insertLink(perfume2._id, "https://www.amazon.com/Nautica-Voyage-Eau-Toilette-Spray/dp/B000P22TIY/ref=sxin_3_ac_d_rm?ac_md=2-2-cGVyZnVtZSBmb3IgbWVu-ac_d_rm&keywords=perfume&pd_rd_i=B000P22TIY&pd_rd_r=bbbdb574-c809-4e44-b7d4-5fb588093959&pd_rd_w=Cp2bW&pd_rd_wg=BF56L&pf_rd_p=6d29ef56-fc35-411a-8a8e-7114f01518f7&pf_rd_r=0JSFS7BSG0VP4YDEH0GS&psc=1&qid=1576381427");
  await perfume.insertImage(perfume2._id, "https://cdn1.imggmi.com/uploads/2019/12/15/b7960d56a90d3b5a8ea27dd3c3859331-full.jpg");
  await perfume.addTags(perfume2._id, "women");
  await perfume.addTags(perfume2._id, "bussiness");

  await perfume.insertSize(perfume3._id, "34oz");
  await perfume.insertLink(perfume3._id, "https://www.amazon.com/Elizabeth-Taylor-White-Diamonds-Fluid/dp/B0009OAI8Q/ref=sxin_5_osp59-a5a7585f_cov?ascsubtag=a5a7585f-d626-4b0f-bdcb-8a7d621a6e71&creativeASIN=B0009OAI8Q&cv_ct_id=amzn1.osp.a5a7585f-d626-4b0f-bdcb-8a7d621a6e71&cv_ct_pg=search&cv_ct_wn=osp-search&keywords=perfume&linkCode=oas&pd_rd_i=B0009OAI8Q&pd_rd_r=bbbdb574-c809-4e44-b7d4-5fb588093959&pd_rd_w=joWK4&pd_rd_wg=BF56L&pf_rd_p=53eff971-6e12-4016-9864-b6dfd929b2b3&pf_rd_r=0JSFS7BSG0VP4YDEH0GS&qid=1576381427&tag=tbonsite-20");
  await perfume.insertImage(perfume3._id, "https://cdn1.imggmi.com/uploads/2019/12/15/52fcf63cc785f508a4a47b8995a9212f-full.jpg");
  await perfume.addTags(perfume3._id, "women");
  await perfume.addTags(perfume3._id, "party");

  await perfume.insertSize(perfume4._id, "31oz");
  await perfume.insertLink(perfume4._id, "https://www.amazon.com/Coach-Signature-Eau-Parfum-3-3/dp/B079SKL3ZP/ref=sr_1_7?keywords=perfume&qid=1576381427&sr=8-7");
  await perfume.insertImage(perfume4._id, "https://cdn1.imggmi.com/uploads/2019/12/15/7cfdb0db7cf1ad422890fdb4f35d1000-full.jpg");
  await perfume.addTags(perfume4._id, "women");
  await perfume.addTags(perfume4._id, "casual");

  await perfume.insertSize(perfume5._id, "30oz");
  await perfume.insertLink(perfume5._id, "https://www.amazon.com/Marc-Jacobs-Daisy-Spray-3-4oz/dp/B0012RV5UO/ref=sr_1_9?keywords=perfume&qid=1576381427&sr=8-9");
  await perfume.insertImage(perfume5._id, "https://cdn1.imggmi.com/uploads/2019/12/15/c3fbf3ed31b65214274ab35e938858be-full.jpg");
  await perfume.addTags(perfume5._id, "men");
  await perfume.addTags(perfume5._id, "casual");

  await perfume.insertSize(perfume6._id, "32oz");
  await perfume.insertLink(perfume6._id, "https://www.amazon.com/Vera-Wang-Parfum-Spray-Ounces/dp/B000E7WHCI/ref=sr_1_16?keywords=perfume&qid=1576381427&sr=8-16");
  await perfume.insertImage(perfume6._id, "https://cdn1.imggmi.com/uploads/2019/12/15/d34c2d8a51085bc6eb94bef78840e806-full.jpg");
  await perfume.addTags(perfume6._id, "men");
  await perfume.addTags(perfume6._id, "party");

  await comments.create(user1._id, perfume1._id, "3", "good");
  await comments.create(user1._id, perfume2._id, "4", "very good");
  await comments.create(user1._id, perfume3._id, "3", "good");
  await comments.create(user1._id, perfume4._id, "5", "awesome");
  await comments.create(user1._id, perfume5._id, "2", "bad");
  await comments.create(user1._id, perfume6._id, "1", "terrible");
  await comments.create(user2._id, perfume1._id, "3", "good");
  await comments.create(user2._id, perfume2._id, "4", "very good");
  await comments.create(user2._id, perfume3._id, "3", "good");
  await comments.create(user2._id, perfume4._id, "2", "bad");
  await comments.create(user2._id, perfume5._id, "5", "awesome");
  await comments.create(user2._id, perfume6._id, "1", "terrible");
  await comments.create(user3._id, perfume1._id, "3", "good");
  await comments.create(user3._id, perfume2._id, "4", "very good");
  await comments.create(user3._id, perfume3._id, "3", "good");
  await comments.create(user3._id, perfume4._id, "2", "bad");
  await comments.create(user3._id, perfume5._id, "5", "awesome");
  await comments.create(user3._id, perfume6._id, "1", "terrible");
  await comments.create(user4._id, perfume1._id, "3", "good");
  await comments.create(user4._id, perfume2._id, "4", "very good");
  await comments.create(user4._id, perfume3._id, "3", "good");
  await comments.create(user4._id, perfume4._id, "2", "bad");
  await comments.create(user4._id, perfume5._id, "5", "awesome");
  await comments.create(user4._id, perfume6._id, "1", "terrible");
  await comments.create(user5._id, perfume1._id, "3", "good");
  await comments.create(user5._id, perfume2._id, "4", "very good");
  await comments.create(user5._id, perfume3._id, "3", "good");
  await comments.create(user5._id, perfume4._id, "2", "bad");
  await comments.create(user5._id, perfume5._id, "5", "awesome");
  await comments.create(user5._id, perfume6._id, "1", "terrible");

  //const userData = await users.getAll()
  //const perfumeData = await users.getAll()


  //console.log(userData[0]);

  // console.log(test['link']);

  console.log('Done seeding database');


  await db.serverConfig.close();
};

main().catch(console.log);