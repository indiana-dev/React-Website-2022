import AnimatedImage from './AnimatedImage'
import './styles.scss'

export default function ProjectCausality({
    project
}) {
    return <div>
        <AnimatedImage project={project} start={0} end={1.2} size={0.8} left={0.1} src="assets/images/causality/causality.mp4" />
        <AnimatedImage project={project} start={0.4} end={1.1} size={0.35} center={true} pixelArt={true} src="assets/images/causality/character.gif"/>
        <AnimatedImage project={project} start={0.8} end={1} size={0.7} right={0.1} src="assets/images/causality/causality3.mp4" />
    </div>
}