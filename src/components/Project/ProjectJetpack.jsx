import AnimatedImage from './AnimatedImage'
import './styles.scss'

export default function ProjectJetpack({
    project
}) {
    return <div>
        <AnimatedImage project={project} start={0} end={1.2} size={0.5} center={true} src="assets/images/jetpack/jetpack.webm" />
        <AnimatedImage project={project} start={0.5} end={1.5} size={0.55} right={0} src="assets/images/jetpack/j1.png" />
        <AnimatedImage project={project} start={0.6} end={1.3} size={0.6} left={0} src="assets/images/jetpack/j2.png" />
        <AnimatedImage project={project} start={0.8} end={1} size={0.7} center={true} src="assets/images/jetpack/j3.png" />
        <AnimatedImage project={project} start={0.9} end={1.2} size={0.55} right={0} src="assets/images/jetpack/j4.png" />
    </div>
}