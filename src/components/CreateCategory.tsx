import { useForm } from "react-hook-form";
import { useRecoilState, useSetRecoilState } from "recoil";
import { categoryState } from "../atoms";

interface IForm {
  category: string;
}

function CreateCategory() {
  const setCategory = useSetRecoilState(categoryState);
  //   const [category, setCategory] = useRecoilState(categoryState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = ({ category }: IForm) => {
    // setCategory((oldCategory) => {}, ...oldCategory);
    setValue("category", "");
  };
  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input
        {...register("category", {
          required: "Please Write category",
        })}
        placeholder="Write category"
      />
      <button>Add</button>
    </form>
  );
}

export default CreateCategory;
