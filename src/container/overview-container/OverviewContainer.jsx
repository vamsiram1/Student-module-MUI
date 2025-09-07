import OverviewHeader from '../../components/overview-components/overview-header/OverviewHeader'
import styles from "./OverviewContainer.module.css"
import OverviewInnerContainer from './OverviewInnerContainer'
const OverviewContainer = () => {
  return (
    <div className={styles.overview_container}>
      <OverviewHeader/>
      <OverviewInnerContainer/>
      
    </div>
  )
}

export default OverviewContainer
