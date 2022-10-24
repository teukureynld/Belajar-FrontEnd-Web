// <!-- <p id="hello">hello2 </p> -->
    // <script>
        let hello = document.getElementById("hello");
        hello.style.backgroundColor = "red";
        hello.innerHTML = "hai hai";
        // hello.innerHTMl = "<a href='form.html'> link form html </a>"
        // inner html bisa digunakan memakai atribut atau tag yang lain

        //konsep seperti array, variable tak boleh ada spasi, jika ingin pake class lain, 
        // tinggal ganti index arraynya 
        // let testing_class = document.getElementsByClassName("testing_class");
        // testing_class[0].innerHTML = "class 1";

        let testing_class = document.getElementsByClassName("testing_class");
        testing_class[1].innerHTML = "class 2";
    // </script>