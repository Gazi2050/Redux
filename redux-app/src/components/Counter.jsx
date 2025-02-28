import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/features/counter/CounterSlice";

const Counter = () => {
    const { count } = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    return (
        <div className="flex flex-col items-center justify-center mt-10">
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md w-72 border border-gray-200">
                <h2 className="text-2xl font-bold mb-3 text-gray-700">Counter</h2>
                <p className="text-4xl font-semibold mb-5 text-gray-900">{count}</p>
                <div className="flex gap-3">
                    <button
                        className="px-5 py-2 bg-green-500 text-white rounded-lg shadow-sm hover:bg-green-600 transition"
                        onClick={() => dispatch(increment())}
                    >
                        +
                    </button>
                    <button
                        className="px-5 py-2 bg-red-500 text-white rounded-lg shadow-sm hover:bg-red-600 transition"
                        onClick={() => dispatch(decrement())}
                    >
                        -
                    </button>

                </div>
            </div>
        </div>
    );
};

export default Counter;