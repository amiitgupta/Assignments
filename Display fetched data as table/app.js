console.log('hello');

fetch("https://jsonplaceholder.typicode.com/todos")
.then(response=>response.json())
.then(todos=>{console.log(todos[0]);
    let tbody=document.querySelector('table');
    todos.forEach(function(item){
        let markup=`<tr><td>${item.id}</td><td>${item.title}</td><td>${item.completed}</td></tr>`;
        tbody.insertAdjacentHTML('beforeend', markup);
      });

      $(document).ready( function () {
        $('table').DataTable();
    } );
      
})
.catch(error=>{
    console.log(error);
})

 