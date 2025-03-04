// Lỗi: không tìm thấy phần tử vì id không khớp (HTML có "clickbtn" còn JS tìm "clickBtn")
document.getElementById("clickBtn").addEventListener("click", function() {
    document.getElementById("greeting").textContent = "Bạn vừa nhấn nút!";
  });
  
  // Lỗi: Gọi hàm không tồn tại để tạo lỗi runtime
  nonExistentFunction();
  