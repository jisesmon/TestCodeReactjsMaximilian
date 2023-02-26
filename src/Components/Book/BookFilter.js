const BookFilter = (props) => {
  const onChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className=" BookFilter  ">
      <div className="mb-3 col-xs-12 col-sm-12 col-md-4 ">
        <label   className="form-label">
          Filter Year 
        </label>
       
        <select
          className="form-select"
          aria-label="Default select example"
          value={props.selected}
          onChange={onChangeHandler}
        >
          <option value="">select item</option>
          {/* <option selected>Open this select menu</option> */}
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2015">2015</option>
          <option value="2010">2010</option>

        </select>
      </div>
    </div>
  );
};

export default BookFilter;
