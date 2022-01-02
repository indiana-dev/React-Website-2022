import AnimatedImage from './AnimatedImage'
import './styles.scss'

export default function ProjectASL({
    project
}) {
    return <div>
        <AnimatedImage project={project} start={0} end={1.2} size={0.8} left={0.1}  src="assets/images/asl/asl.png" />
        <AnimatedImage project={project} start={0.4} end={1} size={0.75} src="assets/images/asl/asl2.png" />
    </div>
}