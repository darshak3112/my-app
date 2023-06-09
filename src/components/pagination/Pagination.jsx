import { useDispatch, useSelector } from "react-redux";
import { incPages, decPages } from "../../store/productSlice";

const Pagination = () => {
  const { pagination } = useSelector((state) => state.products);
  const { offset } = pagination;

  const dispatch = useDispatch();

  const onPrevClick = () => {
    dispatch(decPages());
  };

  const onNextClick = () => {
    dispatch(incPages());
  };

  return (
    <>
      <div class="flex flex-col items-center">
        <span class="text-sm text-indigo-800 dark:text-indigo-900">
          Showing{" "}
          <span class="font-semibold text-indigo-900 ">{offset + 1}</span> to{" "}
          <span class="font-semibold text-indigo-900 ">{offset + 12}</span> of{" "}
          <span class="font-semibold text-indigo-900 ">260</span> Entries
        </span>

        <div class="inline-flex mt-2 xs:mt-0">
          <button
            onClick={onPrevClick}
            class="px-4 py-2 text-sm font-medium text-white bg-indigo-800 rounded-l hover:bg-indigo-900 dark:bg-indigo-800 dark:border-indigo-700 dark:text-indigo-200 dark:hover:bg-indigo-700 dark:hover:text-white"
          >
            Prev
          </button>
          <button
            onClick={onNextClick}
            class="px-4 py-2 text-sm font-medium text-white bg-indigo-800 border-0 border-l border-indigo-700 rounded-r hover:bg-indigo-900 dark:bg-indigo-800 dark:border-indigo-700 dark:text-indigo-200 dark:hover:bg-indigo-700 dark:hover:text-white"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Pagination;
