from time import sleep

from celery import shared_task

from flask import current_app, session

from flask_socketio import emit, Namespace, SocketIO


class MultiEditorNamespace(Namespace):
    def on_connect(self):
        pass

    def on_disconnect(self):
        pass

    def on_my_event(self, data):
        long_running.delay()
        session['receive_count'] = session.get('receive_count', 0) + 1
        emit('my_response',
             {'data': data['data'] + ' - from server', 'count': session['receive_count']})


@shared_task
def long_running():
    socketio = SocketIO(message_queue=current_app.config['BROKER_URL'])
    socketio.emit('my_response',
                  {'data': 'Inside of task'}, namespace='/multieditor')
