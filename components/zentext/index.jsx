import { useWindowSize } from './hook.windowsize';
import { useScrollPos } from './hook.usescrollpos';
import { ZenTextContainer, ZenTextWrapper } from './styles.zentext';
import { ewGrossMath, zenable } from './util.usemath'

export function ZenText ({ scrollable = 2000 }){
  const { height } = useWindowSize();  
  const position = useScrollPos();
  return (
    <div style={{height: '5000px'}}>
    <ZenTextContainer style={{ height: scrollable + 'px' }}>
      <ZenTextWrapper id='zentext-wrapper'>
        <p style={{
          opacity: `${
            ewGrossMath({startingPos: 1000, pos: position }) < 100 
            ? '.' + ewGrossMath({startingPos: 1000, pos: position })
            : ewGrossMath({startingPos: 1000, pos: position })
          }`
        }}>
          {'Opacity would be:'} {position && ewGrossMath({startingPos: 1000, pos: position })}
        </p>
        
        <br/>

        <p id='zenable'>
          {'Current Position: '} {position} {zenable({startingPos: 1000, pos: position })}
        </p>

      </ZenTextWrapper>
      <style>{`
        #zentext-wrapper {
          top: ${height / 2 + 'px'};
        }
        #zenable {
          opacity: ${ewGrossMath({startingPos: 1000, pos: position })}
        }
      `}</style>
    </ZenTextContainer>
    </div>
  )
}