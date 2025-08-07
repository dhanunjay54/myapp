import React from 'react';

export default function Alert(props) {
   const capatilize =(word)=>{
      const lower = word.toLowerCase();
      return lower.charAt(0).toUpperCase()+lower.slice(1);

    }
  return (
   
  props.variablealert && <div className={`alert alert-${props.variablealert.type} alert-dismissible fade show`} role="alert">
  <strong>{capatilize(props.variablealert.type)}</strong>:{props.variablealert.msg}
  <button type="button" className="btn-close"  data-bs-dismiss="alert" aria-label="Close"></button>
</div>
   
  );
}
