
// ฟังก์ชันเพื่อตรวจจับเหตุการณ์ "keydown"
function handleKeyDown(event) {
  // ตรวจสอบว่าปุ่ม Ctrl ถูกกดหรือไม่
  if (event.ctrlKey) {
    // กระทำตามต้องการเมื่อปุ่ม Ctrl ถูกกดค้างไว้
    console.log("ปุ่ม Ctrl ถูกกดค้างไว้");
    // เพิ่มโค้ดการประมวลผลเพิ่มเติมที่นี่
  }
}

// เพิ่มการตรวจจับเหตุการณ์ "keydown" ให้กับเอกสาร (document)
document.addEventListener("keydown", handleKeyDown);
