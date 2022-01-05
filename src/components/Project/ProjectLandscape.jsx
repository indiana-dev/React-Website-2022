import AnimatedImage from './AnimatedImage'
import './styles.scss'

export default function ProjectLandscape({
    project
}) {
    return <div>
        <AnimatedImage project={project} start={0} end={1.4} size={0.8} left={0}  src="assets/images/landscape/ls0.png" />
        <AnimatedImage project={project} start={0.4} end={1.4} size={0.6} src="assets/images/landscape/ls1.png" />
        <AnimatedImage project={project} start={0.75} end={1.4} size={0.6} right={0} src="assets/images/landscape/ls1.png" />
        <AnimatedImage project={project} start={0.7} end={1} size={0.7} src="assets/images/landscape/ls2.png" />
    </div>
}