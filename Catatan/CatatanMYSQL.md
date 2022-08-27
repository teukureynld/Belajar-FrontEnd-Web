#Catatan Cara untuk menuliskan table data base di XAMPP 

- SELECT * FROM `articles` WHERE id ORDER BY id DESC; < Mencari id dengan descending (dari value terbesar ke kecil, kalo asc) >

- SELECT * FROM `articles` WHERE id LIMIT 1 OFFSET 1; < Data id ditampilkan max 1 dan id di~skip 1 >

- INSERT INTO articles (tittle, category, publish_time) VALUES ("Isi spek keyboard maxfit61" , "Informasi" , "2022-08-27 19:45:50"); < Insert Data ke table DB article , harus sesuai dengan kolom DB >

- UPDATE articles SET tittle = "Keyboard Mechanical 250 ribu adalah merk Digital Alliance" 
  WHERE id=5; < Untuk Mengubah Data yang pada kolum id ke 5 >

  
