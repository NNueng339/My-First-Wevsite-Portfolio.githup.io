// JavaScript to load the navbar from navbar.html into the div
fetch('navbar.html')  // 1
    .then(response => response.text())  // 2
    .then(data => {  // 3
        document.getElementById('navbar-container').innerHTML = data;  // 4
    })  // 5
    .catch(error => {
        console.error('Error loading navbar:', error);  // 6
    });
//-----------------------------------------------------------------
document.addEventListener('contextmenu', function (event) {
    event.preventDefault();  // ป้องกันเมนูคลิกขวาจากการแสดง
    //alert('การคลิกขวาถูกปิดใช้งาน');
});
document.addEventListener('keydown', function (event) {
    if ((event.ctrlKey && event.key === 'c') || event.key === 'u' || event.key === 'i') {
        event.preventDefault();  // ป้องกันการใช้แป้นพิมพ์สำหรับการคัดลอก
        //alert('การคัดลอกและบางคำสั่งถูกปิดใช้งาน');
    }
});
document.addEventListener('copy', function (event) {
    event.preventDefault();  // ป้องกันการคัดลอกข้อความจากเว็บ
    // alert('การคัดลอกถูกปิดใช้งาน');
});
document.addEventListener('keydown', function (event) {
    if (event.key === 'F12' || (event.ctrlKey && event.shiftKey && event.key === 'I')) {
        event.preventDefault();  // ปิดการใช้ Developer Tools
        // alert('Developer Tools ถูกปิดใช้งาน');
    }
});
document.addEventListener('mousedown', function (event) {
    event.preventDefault();  // ป้องกันการเลือกข้อความ
    // alert('การเลือกข้อความถูกปิดใช้งาน');
});
