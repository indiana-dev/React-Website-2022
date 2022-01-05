import AnimatedImage from './AnimatedImage'
import './styles.scss'

export default function ProjectTicTacToe({
    project
}) {
    return <div>
        <AnimatedImage project={project} start={0} end={1.4} size={0.6} center={true} src="assets/images/tictactoe/img2.png" />
        <AnimatedImage project={project} start={0.5} end={1} size={0.5} center={true} src="assets/images/tictactoe/img12.png" />
    </div>
}