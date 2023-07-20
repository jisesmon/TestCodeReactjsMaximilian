import React ,{useMemo,mountMemo} from "react";

const PageCh12_ListItemDemo = (props) => {
  const {items}=props;
  const list = useMemo(()=> items.sort((s, v) => s - v),[ items]) ;//useMemo();
  console.log('PageCh12_ListItemDemo--rerender!');

  return (
    <div>
      <ul>
        {list.map((x,i) => {
          return <li key={i} className="p-2">{x}</li>;
        })}
      </ul>
    </div>
  );
};
export default PageCh12_ListItemDemo;
