// Task 3: Stock Replenishment Check
// Before placing the weekly supply order, the manager wants to avoid over-ordering ingredients
// that are already well-stocked. They need a list of every ingredient with a stock level
// of 100 or more so those can be deprioritised in this week's order.
//
// Hint: Write a query to find all ingredients in the ingredients collection that have a stock_level of 100.00 or more.

// Bonus: The dataset is identical in the PostgreSQL database, meaning the same business insight can be retrieved.
// Write the equivalent query for PostgreSQL. See query_task3_bonus.sql

// ---------------------------------------------------------------
// Your thinking process (required)
// ---------------------------------------------------------------
// Before writing your query, explain in your own words how you
// interpreted the task, what data you need, which collection(s)
// are involved, and what MongoDB concepts you plan to use.
// Write in English or Thai. Do not skip this step.
//
// Your thinking:
// อันดับแรก ต้องทำการดูโครงสร้างข้อมูลchromeburgerdbก่อน โดยจะไปดูที่ Collection ingredients 
// เพราะมีการบรรจุวัตถุดิบใน collection นั้น โดยเมื่อเข้าไปแล้ว
// ก็จะพบเจอ document รายการวัตถุดิบเมนูแต่ละอย่าง โดยก็จะมีข้อมูลของแต่ละวัตถุดิบแยกกันหลาย doc
// จากโจทย์ข้อนี่ เราจะสนใจจากข้อมูลคงคลัง ใน key ชื่อ "stock_level" ซึ่งจะมี value 
// บรรจุข้อมูลสต็อกคงเหลือไว้รูปแบบ Decimal128 
// เราก็ต้องกวาด ค้นหา (find) ข้อมูลทุกอันใน collection ingredients ที่อยู่ใน key "stock_level" ที่มีค่า "มากกว่าหรือเท่ากับ 100 หน่วยขึ้นไป"
// และจากโจทย์บอกว่า  need a list of every ingredient with a stock level
// of 100 or more ให้แสดงรายการ (projection) ของทุกๆอันที่มีสต็อกมากกว่า 100 
use("chrome-burger-db");

db.ingredients.find(
    {
        "stock_level":{ $gte:100 }
    },
    // ถ้าต้องการเอาแค่ชื่อกับสต็อกคงคลัง ลบคอมเมนต์ได้
    //{name:1,stock_level:1}
);