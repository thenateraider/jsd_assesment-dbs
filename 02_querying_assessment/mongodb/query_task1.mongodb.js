// Task 1: Budget Meal Deal
// The owner wants to introduce a budget-friendly meal deal promotion and needs to identify
// which menu items could be included. To qualify, an item must be priced under $10.00,
// so they can offer good value without cutting too deep into margins.
//
// Hint: Write a query to find all menu items in the menu_items collection that have a price less than 10.00.

// Bonus: The dataset is identical in the PostgreSQL database, meaning the same business insight can be retrieved.
// Write the equivalent query for PostgreSQL. See query_task1_bonus.sql

// ---------------------------------------------------------------
// Your thinking process (required)
// ---------------------------------------------------------------
// Before writing your query, explain in your own words how you
// interpreted the task, what data you need, which collection(s)
// are involved, and what MongoDB concepts you plan to use.
// Write in English or Thai. Do not skip this step.
//
// Your thinking:
// อันดับแรก ต้องทำการดูโครงสร้างข้อมูลก่อน โดยจะไปดูที่ Collection menu_items เพราะมีการบรรจุราคาใน collection นั้น โดยเมื่อเข้าไปแล้ว
// ก็จะพบเจอ document รายการอาหารเมนูแต่ละอัน และแต่ละเมนูก็จะประกอบไปด้วยข้อมูลแต่ละอัน
// จากโจทย์ข้อนี่ เราจะสนใจจากข้อมูลราคา ใน key ชื่อ "price" ซึ่งจะมี value บรรจุข้อมูลราคาไว้รูปแบบ Decimal128 
// เราก็ต้องกวาด ค้นหา ข้อมูลทุก menu_items ที่อยู่ใน key "price" ที่มีค่า "น้อยกกว่า  10 เหรียญusd"

use("chrome-burger-db");

db.menu_items.find({
        "price":{ $lt:10 }
}
);
