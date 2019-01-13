import Core from '@woken/core';
import { ObjectService, EntityService } from '@woken/entity-service';
import ReactDOM from 'react-dom';
import { RenderService } from '@woken/render-service';

const game = new Core({
  services: [RenderService, ObjectService, EntityService],
});

ReactDOM.render(
  game.getService(RenderService).render()
  document.getElementById('app')
);
