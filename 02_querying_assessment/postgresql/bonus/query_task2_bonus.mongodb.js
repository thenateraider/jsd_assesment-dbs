// Task 2 Bonus: Kitchen Staff Contact List
// The manager has a last-minute change to the kitchen prep schedule and needs to notify
// all cooks as soon as possible. They need the full names of every staff member
// whose role is 'Cook' so they can be contacted directly.
//
// The dataset is identical in MongoDB — the same business insight can be retrieved.
//
// Hint: Write a query on the staff collection to find the first_name and last_name
// of all documents where the role is 'Cook'.

// ---------------------------------------------------------------
// Your thinking process (required)
// ---------------------------------------------------------------
// Before writing your query, explain in your own words how you
// interpreted the task, what data you need, which collection(s)
// are involved, and what MongoDB concepts you plan to use.
// Write in English or Thai. Do not skip this step.
//
// Your thinking:
//
// ตอนนี้ เรามี ข้อมูล พนักงาน (staff)ในร้านในตาราง Staff (จากที่ Insert Into ไป) แล้ว 
// โดยจะมีฟิลด์ข้อมูลต่างๆของพนักงานบรรจุในตารางนั้น
// แต่ข้อมูลที่เราสนใจและต้องการ "เลือกและค้นหา หรือจับมาผสมถ้าต้องการแค่ชื่อ" มาก็คือ ชื่อ (first_name) และ นามสกุล (last_name) 
// โดย จะต้องเป็นพนักงานที่เป็น cook เท่านั้น ซึ่งตรวจได้จาก role = "Cook" หรือกุ๊ก


// หากอยากแยกชื่อ - สกุุลที่เป็น cook
/*
use("chrome-burger-db");
db.staff.find(
    {
    "role":"Cook",
    },
    {
        _id:0,
        
        first_name:1,
        last_name:1
    }
);
*/

 //แสดงแค่ชื่อกับนามสกุลแบบรวม (concat ด้วยคำสั่งนี้)
 
use("chrome-burger-db");

db.staff.aggregate([
    // เอาเฉพาะคนที่มีตำแหน่งเป็น Cook (เหมือน findบน)
    {
        $match: { "role": "Cook" }
    },
    //เลือก project แค่ ชื่อกับนามสกุล โดยเรากันใหม่ที่ key ชื่อ 
    // full_name ผ่านการ concat ทั้งสองอย่างเข้ากัน
    {
        $project: {
            _id: 0, // ปิดการแสดงผล _id และเอาแต่ชื่อเต็มมาแสดงด้วย concat (รวมสตริง)
            full_name: { 
                $concat: [ "$first_name", " ", "$last_name" ] 
            }
        }
    }
]);
 