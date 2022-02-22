fetch('data.json')
.then(function (response) {
    return response.json();
})
.then(function (data) {    
    addJsonData(data);    
})
.catch(function (err) {
    console.log('error: ' + err);
});

function addJsonData(data) {
    console.log('Debug here')
    console.log("this is the ",data.section2[1])
    var count=0;
    const parentDiv = document.getElementById('section-2');
 
    data.section2.forEach(element => {
        const divParEl = document.createElement('div');
        divParEl.id = 'did'+ (++count);
        const div1 = document.createElement('div');
        const div2 = document.createElement('div');
        const div3 = document.createElement('div');     
        divParEl.style.width = '300px';
       
        divParEl.style.float='left';
        divParEl.style.margin = '10px';
            
        const img = document.createElement('img');
        img.setAttribute('src',element.image);
        img.setAttribute('alt',element.heading);
        img.style.width = '250px';
        img.style.height = '200px';
        div1.appendChild(img);
        div1.style.width = '333px';
        div1.style.padding = '10px';
        div1.style.float = 'left';


        const imgText = document.createElement('h3');
        const textContent = document.createTextNode(element.heading);
        imgText.appendChild(textContent);
        div2.appendChild(imgText);


        const infoText = document.createElement('p');
        const textWidth = document.createTextNode(element.text);
        infoText.appendChild(textWidth);
        div3.appendChild(infoText);

       
        divParEl.appendChild(div1);
        divParEl.appendChild(div2);
        divParEl.appendChild(div3);
        div1.style.float = 'left';
        divParEl.style.background = 'black';
        div2.style.width = '333px';
        div2.style.padding = '10px';
        div3.style.padding = '10px';
        div3.style.width = '333px';
        parentDiv.appendChild(divParEl);        
    });

    const lparentDiv = document.getElementById('section-3');
   
    const leftDiv = document.createElement('div');
    const rightDiv = document.createElement('div');

    
    leftDiv.id = 'sec-3-lDiv';
    rightDiv.id = 'sec-3-rDiv';
    
    const leftDivData = document.createElement('p');
    const pData = document.createTextNode(data.section3.text[0] );
    const pData1 = document.createTextNode(data.section3.text[1] );
    leftDivData.appendChild(pData);
    
    leftDivData.appendChild(document.createElement('br'));
    leftDivData.appendChild(document.createElement('br'));
    
    leftDivData.appendChild(pData1);
    leftDiv.appendChild(leftDivData);
    
    const rightDivData = document.createElement('img');
    rightDivData.src = 'lasky.png';
    rightDivData.alt= 'LASKY';
   
    rightDiv.appendChild(rightDivData);

    lparentDiv.appendChild(leftDiv);
    lparentDiv.appendChild(rightDiv);
    
    
    const sec_4_upper_left = document.getElementById('s4u-pt1');
    const sec_4_upper_right = document.getElementById('s4u-pt2');
    const sec_4_lower_left = document.getElementById('s4l-pt1');
    const sec_4_lower_right = document.getElementById('s4l-pt2');


    const img1 = document.createElement('img');
    const img2 = document.createElement('img');
    const s4_up = document.createElement('div');
    const s4_dwn = document.createElement('div');
    const s4_mid = document.createElement('div');
    
    s4_up.id = 's4_up';
    s4_dwn.id = 's4_dwn';
    s4_mid.id = 's4_mid';
    const s4 = document.getElementById('section-4');
    s4_mid.style.width = '900px';
   
    s4.appendChild(s4_up);
    s4.appendChild(s4_mid);
    s4.appendChild(s4_dwn);
    
    const arr = [s4_up,s4_dwn];
    var cnt = 0;

    data.section4.forEach(element => {
        const leftHalf = document.createElement('div');
        const rightHalf = document.createElement('div');
        leftHalf.id = 'lft'+cnt;
        rightHalf.id = 'rgt'+cnt;
        
        const sb1 = document.createElement('img');
        const headNode = document.createTextNode(element.heading);
        const heading = document.createElement('h2');
        heading.appendChild(headNode);

        const sb2 = document.createElement('p');        
        sb1.src = element.image;
        sb1.alt = 'Alt'
                
        const txtNode = document.createTextNode(element.text);

        sb2.appendChild(heading);
        sb2.appendChild(txtNode);
       
        sb1.id = 'img'+cnt;
        sb2.id = 'p'+cnt;
        leftHalf.appendChild(sb1);
        rightHalf.appendChild(sb2);
        arr[cnt].appendChild(leftHalf);
        arr[cnt].appendChild(rightHalf);
        cnt++;
    });
   

}