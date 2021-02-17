//todo class


class Todo {
  constructor(title, dueDate, notes,id){
    this.title = title;
    this.dueDate = dueDate;
    this.notes = notes;
    this.id = id;
  }

  };

  

  



  function populateList(){
    let taskList=[];

    let t1 = new Todo("Do Laundry", "3-2-21", "Need to buy soap too ugh", 1);
    let t2 = new Todo("Pack bags for Rome trip", "3-4-21", "Need to buy new luggage tags", 2);
    taskList.push(t1)
    taskList.push(t2)
    return taskList;
  }



  export {
    populateList
  };



