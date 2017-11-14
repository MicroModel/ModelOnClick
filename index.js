function AddOnClick(Class){
  return class extends Class {
    constructor(...args){
      super(...args);
      Object.defineProperty(this, 'handlers', { value: []});
      this.onClick = this.onClick.bind(this);
      this.node.onclick = this.onClick;
    }

    onClick(e){
      return this.handlers.map( f => f(e) );
    }
  }
}