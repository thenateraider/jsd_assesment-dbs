// Task 3 Bonus: Staff Performance Review
// At the end of the month, the owner wants to reward the hardest-working cashiers.
// To decide fairly, they want to see how many orders each staff member has processed,
// with the busiest staff member appearing at the top of the list.
//
// The dataset is identical in MongoDB — the same business insight can be retrieved.
//
// Hint: Write an aggregation query on the orders collection to count the number of orders
// per staff member. Each order embeds the staff member's first and last name directly.
// The result should show each staff member's full name and their total order count,
// ordered by the count in descending order.

// ---------------------------------------------------------------
// Your thinking process (required)
// ---------------------------------------------------------------
// Before writing your query, explain in your own words how you
// interpreted the task, what data you need, which collection(s)
// are involved, and what MongoDB concepts you plan to use.
// Write in English or Thai. Do not skip this step.
//
// Your thinking:
// ตอนนี้เรามีข้อมูลของพนักงานจากcollection Staff เป็นหลัก แล้วเราต้่องนำมา เชื่อมโยง 
// ร่วมกับข้อมูลรายการสั่งซื้อออเดอร์ของร้านจากcollection  Orders
// โดยจะaggregate ข้อมูลผ่านคอลัมน์ staff_id ที่ระบุอยู่ว่าพนักงานคนไหนเป็นคนรับออเดอร์นั้น ๆ ชื่อนามสกุุลไร
// จากนั้นทำการจัดกลุ่มพนักงาน และนับจำนวนออเดอร์ทั้งหมดออกมาเป็นยอดรวมของแต่ละคนในคอลัมน์ order_count
// แต่เนื่องจากการแสดงผลแค่จำนวนออเดอร์และรหัสพนักงานยังไม่เพียงพอต่อตามโจทย์ เพื่อสะดวกกับหัวหน้า
// และดูง่าย จึงต้องดึงข้อมูลชื่อ (first_name) และนามสกุล (last_name) 
// จากตาราง Staff มา "เลือกและจับมาชนกัน (Concatenated)" คั่นด้วยช่องว่างชื่อ-นามสกุล
// เพื่อรวมกันเป็นชื่อคอลัมน์ใหม่ที่ใช้แสดงผลว่า full_name และต่อท้ายด้วยการเรียงลำดับพนักงาน
// ที่ทำยอดออเดอร์ได้มากที่สุดลงไปน้อยที่สุด (desc)

use("chrome-burger-db");
db.orders.aggregate([
    {
        $group: {
            _id: {
                first_name: "$staff.first_name",
                last_name: "$staff.last_name"
            }, order_count: { $sum: 1 } // นับจำนวนออเดอร์ทีละ 1 
        }
    },{
        $project:{
            _id:0,
            full_name:{
                $concat:["$_id.first_name"," ","$_id.last_name"]
                //รวมชื่อและนามสกุลเป็น full_name ถ้าไม่รวม ก็แค่ porject แยกได้ตามเดิม
            },
            order_count:1
        }

    },{
        $sort:{ order_count: -1} // เรียงมากไปน้อย
    }

]);