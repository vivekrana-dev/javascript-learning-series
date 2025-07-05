function change() {
    let element = document.getElementsByTagName("h1");
    element[0].innerText = "Hello world";
    let ele1 = document.getElementsByClassName("head1");
    ele1[0].innerText =  "New Heading";
    let ele2 = document.getElementsByClassName("head2");
    ele2[0].innerText = "New Heading 2";
    let ele3 = document.getElementById("main");
    ele3.innerText = "New Param Heree....";
    ele3.style.backgroundColor = "green";
}







