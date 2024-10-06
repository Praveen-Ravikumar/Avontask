function datefunction(){
    const getdate=document.getElementById('dateDisplay');
    const currentdate=new Date();
    const option={day:'numeric',month:'long',year:'numeric'};
    const formatdate=currentdate.toLocaleDateString('en-US',option);
    getdate.innerHTML=formatdate;
}
datefunction();


