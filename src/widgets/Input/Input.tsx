import {
  ChangeEvent,
  forwardRef,
  HTMLInputTypeAttribute,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState
} from 'react';
import { classNames } from '@/shared';
import cls from './Input.module.pcss'

interface InputProps {
  type?: HTMLInputTypeAttribute
  placeholder?: string;
  label?: string;
  iconSrc?: string;
  error?: string;
  name?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, forwardRef) => {
  const { type, placeholder, label, iconSrc, error, name } = props
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [focused, setFocused] = useState<boolean>(false);
  const [value, setValue] = useState<string>('')

  const hasValue = useMemo(() => !!value.length, [value])

  const containerClassName = useMemo(() => {
    return classNames(cls.input, {
      [cls.inputFilled]: focused || hasValue,
      [cls.inputError]: !!error
    }, [])
  }, [focused, hasValue, error])

  const inputClassName = useMemo(() => {
    return classNames(cls.inputField, {
      [cls.inputFieldHide]: !hasValue && !focused
    }, [])
  }, [hasValue, focused])

  useImperativeHandle(forwardRef, () => inputRef.current!, []);

  useEffect(() => {
    if (!inputRef.current) return
    if (focused) {
      inputRef.current.focus()
    }
  }, [focused]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)

  const handleFocus = () => {
    setFocused(true)
  }

  const handleBlur = () => setFocused(false)

  return (
    <div>
      <div className={containerClassName} onClick={handleFocus}>
        {iconSrc && <img alt="Input icon" className={cls.inputFieldIcon} src={iconSrc} />}
        <div>
          {placeholder && !focused && !value && <span>{placeholder}</span>}
          {label && (focused || value) && <span>{label}</span>}
          <div className={inputClassName}>
            <input
              ref={inputRef}
              name={name}
              type={type}
              value={value}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </div>
        </div>
      </div>
      <p className={cls.inputHint}>{error}</p>
    </div>
  );
});

