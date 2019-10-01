import React from 'react';
const ExerciseForm = ({ onChange, onSubmit, form }) => (
    <div className="formulario">
        <form  onSubmit={onSubmit}>
            <div className="form-group">
                <input 
                    type="text" 
                    className="form-control" 
                    id="title" 
                    placeholder="Title"
                    name="title"
                    onChange={onChange}
                    value={form.title}
                />
            </div>
            <div className="form-group">
                <input 
                    type="text" 
                    className="form-control" 
                    id="description"
                    placeholder="Description" 
                    name="description"
                    onChange={onChange}
                    value={form.description}
                />
            </div>
            <div className="form-group">
                <input 
                    type="text" 
                    className="form-control" 
                    id="img"
                    placeholder="Img" 
                    name="img"
                    onChange={onChange}
                    value={form.img}
                />
            </div>
            <div className="row-2">
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control" 
                        id="leftColor" 
                        placeholder="LeftColor" 
                        name="leftColor"
                        onChange={onChange} 
                        value={form.leftColor}
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="description" 
                        className="form-control" 
                        id="rightColor" 
                        placeholder="RightColor" 
                        name="rightColor"
                        onChange={onChange}
                        value={form.righColor} 
                    />
                </div>
            </div>
            <button 
                type="submit" 
                className="btn btn-primary flex-end"
            >
                Add
            </button>
        </form>
    </div>           
)
export default ExerciseForm 