import  { useState } from 'react';

const Form = () => {
    const [form, setForm] = useState({
        email: "",
        password: "",
        role: "",
        gender: "",
        rules: false,
    });

    const changeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;

        setForm((prevForm) => ({
            ...prevForm,
            [name]: value,
        }));
    };

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(form);
    };

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input
                    placeholder="Email"
                    name="email"
                    value={form.email}
                    onChange={changeHandler}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="password"
                    value={form.password}
                    onChange={changeHandler}
                />
                <select
                    value={form.role}
                    name="role"
                    onChange={changeHandler}
                >
                    <option value="">Select role</option>
                    <option value="Admin">Admin</option>
                    <option value="User">User</option>
                    <option value="Writer">Writer</option>
                </select>
                <div>
                    <label htmlFor="male">Male</label>
                    <input
                        id="male"
                        checked={form.gender === "male"}
                        value="male"
                        name="gender"
                        type="radio"
                        onChange={changeHandler}
                    />
                    <label htmlFor="female">Female</label>
                    <input
                        id="female"
                        checked={form.gender === "female"}
                        value="female"
                        name="gender"
                        type="radio"
                        onChange={changeHandler}
                    />
                    <label htmlFor="other">Other</label>
                    <input
                        id="other"
                        checked={form.gender === "other"}
                        value="other"
                        name="gender"
                        type="radio"
                        onChange={changeHandler}
                    />
                </div>
                <div>
                    <label htmlFor="rules">Accept Rules</label>
                    <input
                        id="rules"
                        name="rules"
                        checked={form.rules}
                        onChange={changeHandler}
                        type="checkbox"
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Form;
