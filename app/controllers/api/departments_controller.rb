class Api::DepartmentsController < ApplicationController
  def index
    render json: Department.all
  end

  def create
  end

  def update
  end

  def destroy
  end
end
