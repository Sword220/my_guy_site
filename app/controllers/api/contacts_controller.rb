class Api::ContactsController < ApplicationController
  
  def create
    ContactMailer.info({ email: params[:email], name: params[:name], phone: params[:phone] }).deliver
  end

end
