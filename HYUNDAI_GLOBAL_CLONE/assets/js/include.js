// "data-include" 속성을 갖는 요소에 대한 탐색
Array.from(document.querySelectorAll("*[data-include]")).map(async(v,i) =>{
    //  ex) data-include = "inc/header.html"
    const include = v.dataset.include;
    let html = null;

    try {
        // inc/header.html 파일의 소스코드를 가져온다.
        const response = await axios.get(include); //일종의 파일 주소(url)--> include
        html = response.data;
    } catch (e){
        console.error(e);
    }

    if (html != null){
        //  v의 안에 넣는 것이 아니라 v자체를 교체함--> index.html파일의 header/footer에 해당하는 div태그랑 교체
        v.outerHTML = html;
    }
});