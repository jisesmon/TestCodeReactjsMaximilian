import React from "react";
import { useSelector } from "react-redux";
import   { useParams ,useLocation ,useSearchParams,useResolvedPath,
   useNavigate,useHistory ,matchPath,generatePath ,HistoryRouter,} from "react-router-dom";
 import { AppRoutes } from "../../AppRoutes";
const PageCh20_DetialBookPage = () => {
  
   ///http://localhost:3000/chapter20/detialbook/959?name=yy&codexy=456
   const searchParam=  useSearchParams(); 
  console.log('searchParam ',searchParam);
      //searchParam[0].name ==>>  yy
       //searchParam[0].codexy  ==>> 456
      //!! searchParam[1]({math:89,farsi:70});
      //console.log('match ',searchParam);
        //searchParam[0].math ==>> 89
       //searchParam[0].farsi  ==>> 70
      
   let navigate = useNavigate();
   //  navigate('/home');
   //  navigate(-2);
   //  navigate(+1);
    console.log('navigate  let navigate = useNavigate();  navigate(\'/home\');');

    const  resolvedPath=  useResolvedPath('');
    console.log('resolvedPath ',resolvedPath);
    
   //  const location = useLocation()
   //  const matchRoutexx= matchRoutes(AppRoutes, location);//[{ route }] 
   //  console.log('matchRoutexx ',matchRoutexx);
    
   //??
   //  const { path } = useRouteMatch();
   //  console.log('useRouteMatch  >> path',path);
   
   // const { pathname } = useLocation();
   //  const isAdminPath = matchPath(pathname, { path: "/admin", exact: false });
   //  console.log('isAdminPath ',isAdminPath);


   const loction= useLocation();
   console.log(' use Location ',loction);
   console.log(' use Location pathname',loction.pathname);///chapter20/detialbook/959
   console.log(' use Location search ',loction.search);//?name=yy&codexy=456
   console.log(' use Location state ',loction.state);
   //?name=yy&codexy=456
    console.log(' new URLSearchParams(loction.search) ',new URLSearchParams(loction.search));

    //version router 5 
   //   const  history= useHistory();//{ go, goBack, goForward }
   //   console.log(' history',history);

   //  const match = matchPath("/users/123"
   // //  , {
   // //    path: "/users/:id",
   // //    exact: true, // Optional, defaults to false
   // //    strict: false, // Optional, defaults to false
   // //  }
   //  ,loction.pathname);
   //const history=HistoryRouter() 
   //not in ver6.16.0
   // const pathPattern=usePathPattern();
   // console.log('pathPattern',pathPattern);
   //not in ver6.16.0
   // const pathPattern=useCurrentPath();
   // console.log('pathPattern',pathPattern);

    const param=useParams();
    console.log('param',param);
     const {id}=param;
    const books=useSelector(state=>state.book.books);  
     
    const book = books.find(x=> x.id === +id ) ; 

   // console.log('book',book,id,books);

  return (
     <div>
        <h3 className="m-5">Detial Book {id} </h3>
        <figure className="figure p-4 m-5">
           {book && <p> book <strong>{book.id}</strong> {book.name} price :{book.price}
            quantity   {book.quantity}          </p>
            }
             <button onClick={() => navigate(-2)}>
        Go 2 pages back
      </button>
        </figure>
     </div>
  
  );
};
export default PageCh20_DetialBookPage;
