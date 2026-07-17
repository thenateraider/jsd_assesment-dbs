// Task 4 Bonus: Supplier Dependency Check
// The manager has just heard that 'Freshest Farm Produce' may be delayed on their next delivery.
// Before deciding whether to source from an alternative supplier, they need to know exactly
// which ingredients depend on that supplier, so they can assess the impact on the menu.
//
// The dataset is identical in MongoDB — the same business insight can be retrieved.
//
// Hint: In the ingredients collection, supplier references are stored as ObjectIds rather than names.
// Use an aggregation pipeline with $lookup to join the ingredients collection with the suppliers
// collection, then filter where the supplier name is 'Freshest Farm Produce' and return
// only the ingredient names.

// ---------------------------------------------------------------
// Your thinking process (required)
// ---------------------------------------------------------------
// Before writing your query, explain in your own words how you
// interpreted the task, what data you need, which collection(s)
// are involved, and what MongoDB concepts you plan to use.
// Write in English or Thai. Do not skip this step.
//
// Your thinking:
// ตอนนี้ เรามี ข้อมูล ส่วนวัตถุุดิบ ingredients และ supplier 
// ของร้านจากcollection Ingredients และ Suppliers ตามลำดับ (จากที่ Insert Into ไป) แล้ว 
// โดยจะ aggregation ข้อมูลผ่านคอลัมน์ supplier_id จากตาราง Ingredients กับ Suppliers 
// ที่เพื่อเชื่อมกัน ด้วยการ lookup
// ระบุว่า ingredient นั้น มี ซัพพลายเออร์ชื่ออะไรรองรับอยู่ ซึ่งตอนนี้ ตาราง ingredients มันมี แค่ suppliers id
// นั่นเป็นเหตุผลว่าทำไมถึงต้อง lookup เพื่อหาชื่อของ suppliers ใดๆ ที่ เข้าเงื่อนไข (match)
// และเเลือกมาแสดงผล (project) ด้วยการเลือกมาแสดงแต่ ชื่อ name ของ ingredient นั้นๆของแหล่งวัตถุดิบที่แมตช์ไป

use("chrome-burger-db");

db.ingredients.aggregate([
    {
        $lookup: {
          from: "suppliers",
          localField: "supplier_id",
          foreignField: "_id",
          as: "suppliers_info"
        }
    },
    {
        $match:{"suppliers_info.name":"Freshest Farm Produce"}
    },
    {
        $project: {
          _id:0,
          name:1
        }
    }
]);