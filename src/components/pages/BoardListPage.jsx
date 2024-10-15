
import React, { useEffect, useState }  from "react";
import boardService from "../../service/BoardService";

const BoardListPage = () => {

  const [boards, setBoards]= useState([]);

  useEffect(()=>{
    console.log("use Effectiv 실행");
    initBoards();
  },[]);

  const initBoards= ()=> {
    boardService.getPageingList()
      .then((response)=>{
        console.log(response);
      })

  };

  return ( 
  <div>

  </div>
  );
};

export default BoardListPage;
