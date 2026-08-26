export default function FormInput({type, name, value, onChange, placeholder, required = false}){

    return (
        <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required= {required}
            className="w-full h-full rounded-3xl text-xs md:text-base lg:text-base"
            style={{
                backgroundColor: "var(--input-background)",
                border: '1.5px solid transparent',
                color: 'var(--gray-text)',
                padding: '14px 24px',
                outline: 'none',
                minHeight: '50px'
            }}
            onFocus={(e) => (e.target.style.borderColor = 'var(--accent)')}
            onBlur={(e) => (e.target.style.borderColor = 'transparent')}
         />
    )
}