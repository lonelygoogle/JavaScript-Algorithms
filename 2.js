//根组件
class MessageList extends React.Component {
    getChildContext() {
      return {color: "purple",text: "item text"};
    }
  
    render() {
      const {messages} = this.props || {}
      const children = messages && messages.map((message) =>
        <Message text={message.text} />
      );
      return <div>{children}</div>;
    }
  }
  
  MessageList.childContextTypes = {
    color: React.PropTypes.string
    text: React.PropTypes.string
  };
  
  //中间组件
  class Message extends React.Component {
    render() {
      return (
        <div>
          <MessageItem />
          <Button>Delete</Button>
        </div>
      );
    }
  }
  
  //孙组件(接收组件)
  class MessageItem extends React.Component {
    render() {
      return (
        <div>
          {this.context.text}
        </div>
      );
    }
  }
  
  MessageItem.contextTypes = {
    text: React.PropTypes.string //React.PropTypes在 15.5 版本被废弃,看项目实际的 React 版本
  };
  
  class Button extends React.Component {
    render() {
      return (
        <button style={{background: this.context.color}}>
          {this.props.children}
        </button>
      );
    }
  }
  
  Button.contextTypes = {
    color: React.PropTypes.string
  };
  