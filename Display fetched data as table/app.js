console.log('hello');

fetch("https://jsonplaceholder.typicode.com/todos")
.then(response=>response.json())
.then(todos=>{console.log(todos[0]);
    let tbody=document.querySelector('table');
    todos.forEach(function(item){

        if(item.completed==true){
           item.completed="checked";
        }
        
        let markup=`<tr>
        <td>${item.id}</td>
        <td>${item.title}</td>
        <td><input type="checkbox" ${item.completed}></td>
        </tr>`;
        tbody.insertAdjacentHTML('beforeend', markup);
      });

      $(document).ready( function () {
        $('table').DataTable();
    } );
      
})
.catch(error=>{
    console.log(error);
})

 