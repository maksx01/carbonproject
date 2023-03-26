import React from 'react';
import { Link } from 'react-router-dom';

/*
const FormPage = () => {
  return (
    <div className='form-result-box'>
        <div className="form-content-box">
            <form>
                <input className="form-input" type="text" name="label1" placeholder="What transport did you use today?" required />

                <input className="form-input" type="text" name="label1" placeholder="What transport did you use today?" required />

                <input className="form-input" type="text" name="label1" placeholder="What transport did you use today?" required />

                <input className="form-input" type="text" name="label1" placeholder="What transport did you use today?" required />

                <input className="form-input" type="text" name="label1" placeholder="What transport did you use today?" required />

                <input className="form-input" type="text" name="label1" placeholder="What transport did you use today?" required />

                <input className="form-input" type="text" name="label1" placeholder="What transport did you use today?" required />

                <div className='form-but-box'>
                  <Link to={"/result"}><button type="button" className="go-to-result-button">
                  Go to Result
                  </button></Link>
                </div>
            </form>
      </div>
    </div>
  );
};
*/

const FormPage = () => {
  return (
    <div className='form-box'>
      <div className="form-container">
        <form>
          <select className="input" required>
            <option selected disabled>What transport did you use today?</option>
            <option value="">Car</option>
            <option value="">Bike</option>
            <option value="">Motobike</option>
            <option value="">Plane</option>
            <option value="">Bus</option>
          </select>
          <select className="input" required>
            <option selected disabled>How long did you take shower today?</option>
            <option value="">0m</option>
            <option value="">&lt;5m</option>
            <option value="">5-10m</option>
            <option value="">10-20m</option>
            <option value="">20-30m</option>
            <option value="">30m&lt;</option>
          </select>
          <select className="input" required>
            <option selected disabled>Did you eat meat today?</option>
            <option value="">Yes</option>
            <option value="">No</option>
          </select>
          <select className="input" required>
            <option selected disabled>How long was your computer on today?</option>
            <option value="">0m</option>
            <option value="">&lt;30m</option>
            <option value="">30m-1h</option>
            <option value="">1h-2h</option>
            <option value="">2h-3h</option>
            <option value="">3h&lt;</option>
          </select>
          <select className="input" required>
            <option selected disabled>Do you turn off lights and electronics when not in use?</option>
            <option value="">Yes</option>
            <option value="">No</option> 
          </select>
          <select className="input" required>
            <option selected disabled>Did you recycle today?</option>
            <option value="">Yes</option>
            <option value="">No</option> 
          </select>
          <select className="input" required>
            <option selected disabled>How many meals do you have each day?</option>
            <option value="">1-3</option>
            <option value="">3-5</option>
            <option value="">5&lt;</option>
          </select>
          <Link to={"/result"}><button className="go-to-result-button" type="submit">Go to result</button></Link>
        </form>
      </div>
    </div>
  )
}
export default FormPage;
