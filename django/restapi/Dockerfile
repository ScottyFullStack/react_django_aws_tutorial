FROM python:3
ENV PYTHONUNBUFFERED 1
RUN mkdir /code
WORKDIR /code
COPY requirements.txt /code/
RUN pip3 install -r requirements.txt
COPY entrypoint.sh /code/
COPY . /code/
RUN ./entrypoint.sh
EXPOSE 8000

CMD ["python3", "manage.py", "runserver", "0.0.0.0:8000"]