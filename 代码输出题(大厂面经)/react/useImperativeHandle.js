const Index = () => {
    const inputEl = useRef();
    useEffect(() => {
      console.log(inputEl.current.someValue);
      // test
    }, []);
  
    return (
      <>
        <Child ref={inputEl} />
        <button onClick={() => inputEl.current.setValues((val) => val + 1)}>
          累加子组件的value
        </button>
      </>
    );
  };
  
const Child = forwardRef((props, ref) => {
const inputRef = useRef();
const [value, setValue] = useState(0);
useImperativeHandle(ref, () => ({
    setValue,
    someValue: "test"
}));
return (
    <>
    <div>child-value:{value}</div>
    <input ref={inputRef} />
    </>
);
});
  