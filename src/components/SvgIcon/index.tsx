import { useMemo } from "react"

interface propsInterface {
    name: string
    size?: string
    color?: string
    prefix?: string
    className?: string
}

export default function SvgIcon(props: propsInterface) {
    const size = props.size ?? "24px"
    const color = props.color ?? ""
    const prefix = props.prefix ?? "icon"
    const iconName = useMemo<string>(() => {
        return `#${prefix}-${props.name}`
    }, [prefix, props.name])

    return (
        <svg style={{ height: size, width: size, color: 'inherits' }} className="fill-current" >
            <use href={iconName} fill={color} />
        </svg>
    )
}