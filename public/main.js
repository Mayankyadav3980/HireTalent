function deleteProduct(id){
    fetch('/delete-job/:' + id, {
        method:'POST'
    }).then( res => {
        if (res.ok) {
            console.log('res is ok');
            
          location.href = "/jobs";       
        }
        
    }).catch(err =>{
        console.log('error is: ' + err);
        
    })
}