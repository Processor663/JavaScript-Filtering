let input2 = document.getElementById("input2");

    input2.addEventListener("keyup", filter)

    function filter(e){
    
        const text = e.target.value.toLowerCase();
        console.log(text)
        
        document.querySelectorAll('.liContainer').forEach( function(task) {
            const item = task.textContent;
            if (item.toLowerCase().indexOf(text) != -1){
                task.style.display ="block";
            } else {
                task.style.display ="none";
    
            }
            
            
            
        });
                
    }