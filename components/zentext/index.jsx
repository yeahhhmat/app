import { useWindowSize } from './hook.windowsize';
import { useScrollPos } from './hook.usescrollpos';
import { ZenTextContainer, ZenTextWrapper } from './styles.zentext';
import { ewGrossMath, zenable } from './util.usemath'

export function ZenText ({ scrollable = 2000 }){
  const { height } = useWindowSize();  
  const position = useScrollPos();
  if(!position) { return <></>}
  return (
    <ZenTextContainer style={{ height: scrollable + 'px' }}>
      <ZenTextWrapper id='zentext-wrapper'>
        <div className="flex flex-col" style={{
          opacity: `${zenable({startingPos: 1000, pos: position })}`
        }}>
          <p>{zenable({startingPos: 1000, pos: position })}</p>
          {/* <br/> */}
          {/* <p>{'Current Position: '} {position}</p> */}
        </div>
      </ZenTextWrapper>
      <style>{`
        #zentext-wrapper {
          top: ${height / 2 + 'px'};
        }
      `}</style>
    </ZenTextContainer>
  )
}