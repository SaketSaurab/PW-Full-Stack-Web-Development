import "./App.css";
import { useForm } from "react-hook-form";
function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(data) {
    //api call ko simulate karenge
    await new Promise((resolve)=>setTimeout(resolve,5000));
    console.log("Submitting the form", data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>First Name</label>
        <input
        className={errors.firstName?'input-error':''}
          {...register("firstName", {
            required: true,
            minLength: {value:3,message:'min lenght 3'},
            maxLength: {value:20,message:'max lenght should be 20'},
          })}
        />
         {errors.firstName && <p className="error-msg">{errors.firstName.message}</p>}
      </div>
      <br />
      <div>
        <label>Middle Name</label>
        <input
        className={errors.middleName?'input-error':''}
          {...register("middleName", {
            required: true,
            minLength: {value:3, message:'Min lenght should be 3'},
            maxLength: 20,
          })}
        />
        {errors.middleName && <p className="error-msg">{errors.middleName.message}</p>}
      </div>
      <br />
      <div>
        <label>Last Name</label>
        <input
        className={errors.lastName?'input-error':''}
          {...register("lastName", {
            pattern:{
              value:/^[A-Za-z]+$/i,
              message:'last name is not as per rule'
            },
            required: true,
            minLength: 3,
            maxLength: 20,
          })}
        />
        {errors.lastName && <p className="error-msg">{errors.lastName.message}</p>}
      </div>
      <br />
      <input type="submit" disabled={isSubmitting}
        value={isSubmitting ?'Submitting':'submit'}
      />
    </form>
  );
}

export default App;
