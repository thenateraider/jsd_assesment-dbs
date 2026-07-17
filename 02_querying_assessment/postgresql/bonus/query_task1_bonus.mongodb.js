// Task 1 Bonus: Sides Menu Board
// The owner wants to update the printed menu board that displays only the side dishes.
// They need a list of every item in the 'Side' category along with its current price,
// so the designer can produce an accurate board without having to check each item manually.
//
// The dataset is identical in MongoDB — the same business insight can be retrieved.
//
// Hint: Write a query on the menu_items collection to find the name and price
// of all documents where the category is 'Side'.

// ---------------------------------------------------------------
// Your thinking process (required)
// ---------------------------------------------------------------
// Before writing your query, explain in your own words how you
// interpreted the task, what data you need, which collection(s)
// are involved, and what MongoDB concepts you plan to use.
// Write in English or Thai. Do not skip this step.
//
// Your thinking:
// อันดับแรก ต้องทำการดูโครงสร้างข้อมูลก่อน โดยจะไปดูที่ Collection menu_items เพราะมีการบรรจุประเภท
// ของแต่ละเมนูใน collection นั้น โดยเมื่อเข้าไปแล้ว
// ก็จะพบเจอ document รายการอาหารเมนูแต่ละอัน และแต่ละเมนูก็จะประกอบไปด้วยข้อมูลแต่ละอัน
// จากโจทย์ข้อนี่ เราจะสนใจจากข้อมูลราคา ใน key ชื่อ "category" "price" และ "name"
// ที่บ่งบอกถึงประเภท ที่เราต้องคัดกรองเอามาแค่ side ก่อน และค่อยแสดง (project ทกุรายการที่เป็น side)
// ด้วยชื่อ และ ราคา

use("chrome-burger-db");

db.menu_items.find(
    {
        "category": "Side"
    },
    // ต้องการเอาแค่ชื่อกับราคาของเครื่องเคียง ต้อง config project
    {
        _id: 0,
        name: 1,
        price: 1
    }
);