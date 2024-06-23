import ChildComponent from './ChildComponent';

type TProps = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

const CounterWithFuncComponent = ({ count, setCount }: TProps) => {
  console.log('count');
  return (
    <div className="border border-red-500 p-10 m-10">
      <button
        className="btn btn-primary"
        onClick={() => setCount((prev) => prev + 1)}
      >
        {count}
      </button>

      <ChildComponent count={count} />
    </div>
  );
};

export default CounterWithFuncComponent;
